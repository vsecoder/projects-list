type Data = {
    id: number;
    img: string;
    name: string;
    now_status: string;
    description: string;
    link: string;
    badges: { label: string; emoji: string}[];
}[];
  
type DataError = {
    message: string;
};

export type { Data, DataError };