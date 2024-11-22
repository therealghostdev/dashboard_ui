import { useEffect, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import propTypes from "prop-types";
import map_icon from "../../assets/Group 107.svg";

// eslint-disable-next-line no-unused-vars
const createCustomIcon = (count) => {
  return L.icon({
    iconUrl: map_icon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapController = ({ selectedCustomer, customers }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCustomer) {
      map.flyTo(
        [selectedCustomer.location.lat, selectedCustomer.location.lng],
        16,
        {
          duration: 2,
          easeLinearity: 0.25,
        }
      );
    } else if (customers.length > 0) {
      const locationCounts = customers.reduce((acc, customer) => {
        const key = `${customer.location.name}`;
        acc[key] = acc[key] || {
          count: 0,
          lat: customer.location.lat,
          lng: customer.location.lng,
        };
        acc[key].count += 1;
        return acc;
      }, {});

      const mostPopulatedLocation = Object.entries(locationCounts).reduce(
        (max, [key, data]) =>
          !max || data.count > max.count ? { key, ...data } : max,
        null
      );

      if (mostPopulatedLocation) {
        map.flyTo([mostPopulatedLocation.lat, mostPopulatedLocation.lng], 13, {
          duration: 2,
          easeLinearity: 0.25,
        });
      } else {
        const bounds = L.latLngBounds(
          customers.map((c) => [c.location.lat, c.location.lng])
        );
        map.flyToBounds(bounds, {
          duration: 1.5,
          easeLinearity: 0.25,
        });
      }
    }
  }, [selectedCustomer, customers, map]);

  return null;
};

const CustomerMap = ({ customers, selectedCustomer }) => {
  const groupedCustomers = useMemo(() => {
    return customers.reduce((acc, customer) => {
      const key = `${customer.location.name}-${customer.location.lat}-${customer.location.lng}`;
      if (!acc[key]) {
        acc[key] = {
          location: customer.location,
          customers: [],
        };
      }
      acc[key].customers.push(customer);
      return acc;
    }, {});
  }, [customers]);

  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={[37.7749, -122.4194]}
      zoom={20}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
      />
      <MapController
        selectedCustomer={selectedCustomer}
        customers={customers}
      />

      {Object.values(groupedCustomers).map(
        ({ location, customers: groupCustomers }) => (
          <Marker
            key={`${location.lat}-${location.lng}`}
            position={[location.lat, location.lng]}
            icon={createCustomIcon(groupCustomers.length)}
          >
            <Popup>
              <div className="max-w-xs">
                <p className="text-sm font-medium mb-2">
                  {groupCustomers.length} customer
                  {groupCustomers.length > 1 ? "s" : ""}
                </p>
              </div>
            </Popup>
          </Marker>
        )
      )}
    </MapContainer>
  );
};

CustomerMap.propTypes = {
  customers: propTypes.array.isRequired,
  selectedCustomer: propTypes.object,
};

MapController.propTypes = {
  customers: propTypes.array.isRequired,
  selectedCustomer: propTypes.object,
};

export default CustomerMap;
