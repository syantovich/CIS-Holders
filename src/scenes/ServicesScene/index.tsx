import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import db from 'services/Db';
import { PlaceType } from 'types/types';
import { GroupPlaces } from 'components/GroupPlaces/GroupPlaces';

function HomeScreen() {
  const [places, setPlaces] = useState<PlaceType[][]>([]);
  useEffect(() => {
    const fetching = async () => {
      const result = await db.getPlaces();
      setPlaces(result);
    };
    fetching();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList data={places} renderItem={GroupPlaces} keyExtractor={(item) => item[0].type} />
    </View>
  );
}

export default HomeScreen;
