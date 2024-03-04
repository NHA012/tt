import {HeaderOnly} from "../components/Layout";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

const publicRoutes = [
    { path : "/", component: Home },
    { path : "/followings", component: Following},
    { path : "/upload", component: Upload, layout: HeaderOnly},
    { path : "/search", component: Search, layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }