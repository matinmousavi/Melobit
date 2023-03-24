import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import Playlists from './Components/Playlists/Playlists'
import History from './Components/History/History'
import Search from './Components/Search/Search'

const routes = [
    {path: '/Melobit' , element: <Home />},
    {path: '/Melobit/favorites' , element: <Favorites />},
    {path: '/Melobit/playlists' , element: <Playlists />},
    {path: '/Melobit/history' , element: <History />},
    {path: '/Melobit/search' , element: <Search />},
]

export {routes}