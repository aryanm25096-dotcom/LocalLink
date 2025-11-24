import { useState, useEffect } from 'react';

interface Location {
    lat: number;
    lng: number;
}

interface GeolocationState {
    location: Location | null;
    error: string | null;
    loading: boolean;
    getLocation: () => void;
}

export const useGeolocation = (): GeolocationState => {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        setLoading(true);
        setError(null);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );
    };

    return { location, error, loading, getLocation };
};
