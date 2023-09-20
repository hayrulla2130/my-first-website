$('.sidebar').append(`<nav class="main-menu">
<ul>
    <li class="sidebar-element">
        <a href="index.html">
            <i class="nav-icon fa-solid fa-house"></i>
            <span class="nav-text">Home</span>
        </a>
    </li>
    <li class="sidebar-element">
        <a href="motobike.html">
            <i class="nav-icon fa-solid fa-motorcycle"></i>
            <span class="nav-text">Motorcycle</span>
        </a>
    </li>
    <li class="sidebar-element">
        <a href="car.html">
            <i class="nav-icon fa-solid fa-car"></i>
            <span class="nav-text">Car</span>
        </a>
    </li>
    <li class="sidebar-element">
        <a href="#">
            <i class="nav-icon fa-solid fa-gear"></i>
            <span class="nav-text">Setting</span>
        </a>
    </li>
    <li class="sidebar-element">
        <a href="information.html">
            <i class="nav-icon fa-solid fa-circle-info"></i>
            <span class="nav-text">Information</span>
        </a>
    </li>
</ul>
</nav>`)

$('.navbar').append(`
<div class="navbar-container">
    <div class="search-input">
        <input type="search" name="search" id="" placeholder=" Search">
    </div>
    <div class="account">
        <!-- <div class="account-text"> -->
        <div class="avatar">
            <img src="images/profile.jpg" alt="avatar">
        </div>
        <div>
            <span class="user-name">Hayrulla Ibadullayev</span> <br>
            <span class="user-position">Front End Developer</span>
        </div>
    <!-- </div> -->
        <div>
            <i class="fa-solid fa-chevron-down fa-lg"></i>
        </div>
    </div>
</div>
`)