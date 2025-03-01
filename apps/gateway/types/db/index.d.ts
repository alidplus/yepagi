type User = {
    id: string;
    name: string;
    bd: Date;
};
export declare const db: {
    user: {
        findMany: () => Promise<User[]>;
        findById: (id: string) => Promise<User | undefined>;
        create: (data: {
            name: string;
        }) => Promise<{
            name: string;
            id: string;
        }>;
    };
};
export {};
