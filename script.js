<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Creative Agency — Dhammu</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

/* 🔥 PERFECT FULLSCREEN BACKGROUND */
body{
    background: url("Colorful Wrapped 2023 Photo Collage.png") no-repeat center center fixed;
    background-size: cover;
}

/* Dark overlay for readability */
body::before{
    content:"";
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.45);
    z-index:-1;
}

/* NAVBAR */
nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:white;
    box-shadow:0 2px 10px rgba(0,0,0,0.05);
    position:sticky;
    top:0;
    z-index:999;
}

.logo{
    font-size:24px;
    font-weight:700;
    color:#ea4c89;
}

nav ul{
    display:flex;
    list-style:none;
    gap:30px;
}

nav ul li{
    cursor:pointer;
    font-weight:500;
}

.login-btn{
    background:#ea4c89;
    color:white;
    padding:8px 18px;
    border-radius:20px;
    border:none;
    cursor:pointer;
    transition:0.3s;
}

.login-btn:hover{
    transform:scale(1.1);
}

/* HERO */
.hero{
    text-align:center;
    padding:140px 20px;
    color:white;
}

.hero h1{
    font-size:52px;
    margin-bottom:20px;
}

.hero p{
    max-width:600px;
    margin:auto;
}

/* STATS */
.stats{
    display:flex;
    justify-content:center;
    gap:40px;
    padding:60px 8%;
    flex-wrap:wrap;
}

.card{
    background:white;
    width:220px;
    padding:40px 20px;
    border-radius:20px;
    box-shadow:0 5px 20px rgba(0,0,0,0.2);
    text-align:center;

    opacity:0;
    transform:translateY(40px);
    transition:0.6s;
}

.card h2{
    color:#ea4c89;
}

/* STORY */
.story{
    padding:80px 8%;
    text-align:center;
    color:white;
}

/* VALUES */
.values{
    padding:80px 8%;
    color:white;
}

.value-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.value-card{
    background:white;
    color:black;
    padding:30px;
    border-radius:20px;
    box-shadow:0 5px 20px rgba(0,0,0,0.2);

    opacity:0;
    transform:translateY(40px);
    transition:0.6s;
}

/* TEAM */
.team{
    padding:80px 8%;
    text-align:center;
    color:white;
}

.team-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:20px;
    margin-top:40px;
}

.team-grid img{
    width:100%;
    border-radius:15px;

    opacity:0;
    transform:translateY(40px);
    transition:0.6s;
}

/* FOOTER */
footer{
    background:#111;
    color:white;
    text-align:center;
    padding:30px;
    margin-top:60px;
}

</style>
</head>

<body>

<!-- NAVBAR -->
<nav>
<div class="logo">VANLATINA CARD</div>

<ul>
<li>Find Talent</li>
<li>Inspiration</li>
<li>Learn Design</li>
<li>Jobs</li>
</ul>

<button class="login-btn">Login</button>
</nav>

<!-- HERO -->
<section class="hero">
<h1>For Dhammu ❤️</h1>
<p>The premier destination for design inspiration, collaboration, and creative growth.</p>
</section>

<!-- STATS -->
<section class="stats">

<div class="card">
<h2 data-target="2009">0</h2>
<p>Founded</p>
</div>

<div class="card">
<h2 data-target="100">0</h2>
<p>Remote</p>
</div>

<div class="card">
<h2 data-target="22">0</h2>
<p>Countries</p>
</div>

</section>

<!-- STORY -->
<section class="story">
<h2>Our Story</h2>
<p>
We started as a small creative community and quickly grew into a global platform
where designers share their work, get inspired, and connect with opportunities.
</p>
</section>

<!-- VALUES -->
<section class="values">

<h2 style="text-align:center;margin-bottom:40px;">Our Values</h2>

<div class="value-grid">

<div class="value-card">
<h3>Own It</h3>
<p>We take responsibility and push creativity forward.</p>
</div>

<div class="value-card">
<h3>Help Customers Succeed</h3>
<p>Our mission is to empower designers worldwide.</p>
</div>

<div class="value-card">
<h3>Deliver Results</h3>
<p>We focus on meaningful impact and quality outcomes.</p>
</div>

<div class="value-card">
<h3>Bring Good Vibes</h3>
<p>Positivity drives innovation and collaboration.</p>
</div>

</div>
</section>

<!-- TEAM -->
<section class="team">
<h2>Meet Our Team</h2>

<div class="team-grid">
<img src="https://source.unsplash.com/300x300/?person">
<img src="https://source.unsplash.com/300x300/?employee">
<img src="https://source.unsplash.com/300x300/?team">
<img src="https://source.unsplash.com/300x300/?office">
</div>

</section>

<footer>
© 2026 Creative Agency. All rights reserved.
</footer>

<script>

/* COUNTER */
const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {

        count++;

        counter.innerText = count;

        if(count < target){
            setTimeout(update, 20);
        }else{
            counter.innerText = target;
        }
    };

    update();
});

/* REVEAL ON SCROLL */
const reveal = document.querySelectorAll(".card, .value-card, .team-grid img");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.85;

    reveal.forEach(el => {

        if(el.getBoundingClientRect().top < trigger){

            el.style.opacity="1";
            el.style.transform="translateY(0)";
        }
    });

});

/* LOGIN BUTTON EFFECT */
document.querySelector(".login-btn").addEventListener("click", function(){

    this.innerText="Welcome ❤️";
    this.style.background="green";

    setTimeout(()=>{
        this.innerText="Login";
        this.style.background="#ea4c89";
    },2000);

});

</script>

</body>
</html>
