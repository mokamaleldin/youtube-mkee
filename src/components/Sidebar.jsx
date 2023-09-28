import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
    >
        {categories.map((Category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(Category.name)}
                style={{
                    background: Category.name === selectedCategory && "#FC1503",
                    color: "white",
                }}
                key={Category.name}
            >
                {/*the icon*/}
                <span  style={{ color: Category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                {Category.icon}
                </span>
                {/*the name*/}
                <span style={{ opacity: Category.name === selectedCategory ? "1" : "0.7" }}>
                {Category.name}
                </span>
            </button>
        ) )} 
    </Stack>
);

export default Sidebar;