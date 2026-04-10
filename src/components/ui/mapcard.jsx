"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
    {
        coords: [38.7, 1.45],
        label: "FORMENTERA",
        url: "https://www.google.com/maps/place/Formentera",
    },
    {
        coords: [46.23, 15.27],
        label: "CELJE",
        url: "https://www.google.com/maps/place/Celje",
    },
];

export default function MapCard() {
    const mapRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (instanceRef.current || !mapRef.current) return;

        const initMap = async () => {
            const L = (await import("leaflet")).default;

            const pinIcon = (label) =>
                L.divIcon({
                    className: "",
                    html: `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer">
                        <div style="width:12px;height:12px;border-radius:50%;background:#fed7aa;box-shadow:0 0 10px #fed7aa88;"></div>
                        <div style="background:#09090b;color:#fed7aa;font-family:monospace;font-size:10px;font-weight:600;padding:2px 6px;border-radius:4px;border:1px solid #fed7aa44;letter-spacing:1px;white-space:nowrap">${label}</div>
                    </div>`,
                    iconAnchor: [6, 6],
                });

            const map = L.map(mapRef.current, {
                zoomControl: false,
                attributionControl: false,
                dragging: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
            });

            L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                { maxZoom: 19 }
            ).addTo(map);

            const points = LOCATIONS.map(({ coords, label, url }) => {
                L.marker(coords, { icon: pinIcon(label) })
                    .on("click", () => window.open(url, "_blank"))
                    .addTo(map);
                return coords;
            });

            const line = L.polyline(points, {
                color: "#fed7aa",
                weight: 1.5,
                opacity: 0.5,
                dashArray: "6 6",
            }).addTo(map);

            map.fitBounds(line.getBounds(), { padding: [60, 60] });
            instanceRef.current = map;
        };

        initMap();

        return () => {
            if (instanceRef.current) {
                instanceRef.current.remove();
                instanceRef.current = null;
            }
        };
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "15px" }}>
            <div
                ref={mapRef}
                style={{ position: "absolute", inset: 0, borderRadius: "15px" }}
            />
        </div>
    );
}