import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import MaterialIcons from '@react-native-vector-icons/material-icons';

type EmergencyItemProps = {
    name:string,
    number:string,
    icon:string,
    id:string,
}

const emergencyContacts = [
    { id: "1", name: "Police", number: "100", icon: "local-police" },
    { id: "2", name: "Hospital", number: "102", icon: "local-hospital" },
    { id: "3", name: "Fire Station", number: "101", icon: "fire-truck" },
];

const EmergencyItem = ({ name, number, icon }:EmergencyItemProps) => (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <MaterialIcons name={icon} size={30} color="red" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 18 }}>{name}: {number}</Text>
    </View>
);
const HomeScreen = () => {
    const [nearbyHospitals, setNearbyHospitals] = useState<EmergencyItemProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchOSMData = async () => {
        const LAT = 28.6139;
        const LON = 77.2090;
        const RADIUS = 5000;

        const overpassQuery = `[out:json];node[amenity=hospital](around:${RADIUS},${LAT},${LON});out;`;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.elements) {
                const hospitals = data.elements.map((item: any, index: number) => ({
                    id: `hospital-${index}`,
                    name: item.tags.name || "Unknown Hospital",
                    icon: "local-hospital",
                }));

                setNearbyHospitals(hospitals);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOSMData();
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
                Emergency Numbers
            </Text>
            <FlatList
                data={emergencyContacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EmergencyItem {...item} />}
            />

            <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 20 }}>
                Nearby Hospitals
            </Text>

            {loading ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    data={nearbyHospitals}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <EmergencyItem {...item} />}
                />
            )}
        </View>
    );
};

export default HomeScreen;
