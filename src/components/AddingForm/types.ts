export type FormStateType = {
  name: string;
  description: string;
  image: { uri?: string };
  coordinates: { latitude?: number; longitude?: number };
  type: string;
};
