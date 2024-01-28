// DataContext.tsx
import React,{ createContext, useContext, ReactNode } from 'react';

interface DataContextProps {
    children: ReactNode;
}

interface DataContextValue {
    selectedOption: {
        wilaya: string;
        commune: string;
        name: string;
        cat:string
    };
    setSelectedOption: (newOption: DataContextValue['selectedOption']) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
    const [selectedOption, setSelectedOption] = React.useState<DataContextValue['selectedOption']>({
        wilaya: '',
        commune: '',
        name: '',
        cat:''
    });

    return (
        <DataContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
