'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useStore } from '@/lib/store';
import { useEffect } from 'react';

// Fix for default Leaflet icons in Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Custom icons based on category could be added here
const agriIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const civicIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const sanitationIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function DashboardMap() {
    const reports = useStore((state) => state.reports);

    // Filter reports that have location data
    const validReports = reports.filter((r) => r.location);

    // Default center (New Delhi)
    const center: [number, number] = [28.6139, 77.2090];

    const getIcon = (category: string) => {
        switch (category) {
            case 'Agriculture': return agriIcon;
            case 'Civic_Infrastructure': return civicIcon;
            case 'Sanitation': return sanitationIcon;
            default: return defaultIcon;
        }
    };

    return (
        <MapContainer center={center} zoom={11} style={{ height: '100%', width: '100%' }} className="rounded-xl z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {validReports.map((report) => (
                <Marker
                    key={report.id}
                    position={[report.location!.lat, report.location!.lng]}
                    icon={getIcon(report.category)}
                >
                    <Popup>
                        <div className="p-2 max-w-[200px]">
                            <div className="w-full h-24 mb-2 rounded-lg overflow-hidden bg-slate-100">
                                <img src={report.image} alt="Report" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-sm mb-1">{report.category.replace('_', ' ')}</h3>
                            <p className="text-xs text-slate-600 mb-1">{report.description}</p>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${report.severity > 7 ? 'bg-red-100 text-red-700' :
                                    report.severity > 4 ? 'bg-amber-100 text-amber-700' :
                                        'bg-green-100 text-green-700'
                                }`}>
                                Severity: {report.severity}
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
