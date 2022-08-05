import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import Playlists from './Components/Playlists/Playlists'
import History from './Components/History/History'
import Search from './Components/Search/Search'

const routes = [
    {path: '/' , element: <Home />},
    {path: '/favorites' , element: <Favorites />},
    {path: '/playlists' , element: <Playlists />},
    {path: '/history' , element: <History />},
    {path: '/search' , element: <Search />},
]

export {routes}