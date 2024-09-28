import {createBrowserRouter} from "react-router-dom";
import ListPage from "../pages/ListPage";
import ReadPage from "../pages/ReadPage";
import AddPage from "../pages/AddPage";
import ModifyPage from "../pages/ModifyPage";


const root = createBrowserRouter(
    [
        {
            path:"",
            element: <ListPage/>
        },
        {
            path:"read/:id",
            element: <ReadPage/>
        },
        {
            path:"add",
            element: <AddPage/>
        },
        {
            path:"modify/:id",
            element: <ModifyPage/>
        }
    ]
);

export default root;