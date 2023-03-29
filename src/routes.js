import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorites/Favorites";
import Playlists from "./Components/Playlists/Playlists";
import History from "./Components/History/History";
import Search from "./Components/Search/Search";

const routes = [
  { path: "/melobit", element: <Home /> },
  { path: "/melobit/favorites", element: <Favorites /> },
  { path: "/melobit/playlist", element: <Playlists /> },
  { path: "/melobit/history", element: <History /> },
  { path: "/melobit/search", element: <Search /> },
];

export { routes };
