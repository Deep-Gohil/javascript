
const Navbar = () => {
    return `
   <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="https://static-00.iconduck.com/assets.00/playstation-icon-2048x1665-icu9gzjj.png" height="40px" width="40px" class="img-fluid" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Games
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/Games/PS5.html">PS5</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/Games/PS4.html">PS4</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/Games/PSVR2.html">PS VR2</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/Games/PC.html">PC</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/Games/PSPlus.html">PS Plus</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            PS5
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/console.html">Console</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/games.html">Games</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/controllers.html">Controllers</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/PSVR2.html">PS VR2</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/Audio.html">Audio</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            PS4
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/console.html">Console</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/games.html">Games</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/controllers.html">Controllers</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS4/headsets.html">Headsets</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/services/PSPlus.html">PS Plus</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Accessories
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/controllers.html">PS5 Contorollers</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/Accessories/playStation.html">PlayStation Portal Remote Player</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/PSVR2.html">PS VR2</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/Audio.html">Audio</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/PS5/Audio.html">All Accessories</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            News
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/news/psBlog.html">Ps Blog</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/news/thisMonth.html">This Month On PlayStation</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Store
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/PlayStation/pages/store/buy.html">Buy Games</a></li>
                            <li><a class="dropdown-item" href="/PlayStation/pages/store/subscribe.html">Subscribe To PS Plus</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
          <a class="nav-link btn btn-primary border border-2" href="/PlayStation/pages/signUP.html" target="_blank">Sign-UP</a> </a>
        </li>
                    <li class="nav-item">
          <a class="nav-link btn btn-primary border border-2" href="/PlayStation/pages/logIn.html" target="_blank">Log-in</a> </a>
        </li>

                    
                </ul>
                <form class="d-flex" role="search">
                    <input id="navbarInput" class="form-contro me-2 navSearch" type="search" placeholder="Search" aria-label="Search">
                    <button class="bt btn-outline-secondary navSearch" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`
}

export default Navbar;