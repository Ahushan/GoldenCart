import { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

interface ProductTabsProps {
  value: string;
  onChange: (value: string) => void;
  tabLabels: string[];
}

const ProductTabs: FC<ProductTabsProps> = ({ value, onChange, tabLabels }) => {
  return (
    <div className="w-full max-w-full  flex overflow-x-auto no-scrollbar bg-background p-2 rounded-md shadow">
      <Tabs value={value} onValueChange={onChange}>
        <TabsList className="overflow-x-auto w-full scrollbar-hide gap-1 no-scrollbar">
          {tabLabels.map((label) => (
            <TabsTrigger
              key={label}
              value={label}
              className="whitespace-nowrap px-4 py-2 text-sm font-medium"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
