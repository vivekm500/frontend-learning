let arr = [
  {
    user: "Sarthak",
    age: 28,
    city: "Bhopal",
  },
  {
    user: "Ritik",
    age: 22,
    city: "Mumbai",
  },
  {
    user: "Vivek",
    age: 20,
    city: "Las Vegas",
  },
  {
    user: "Tanish",
    age: 38,
    city: "Kolkata",
  }
];

let sum1 = 0;

arr.forEach( (val) => {
    sum1 = sum1 + val.age;
})

console.log('avg age =', sum1/arr.length)

// 


const users = [
  {
    fullName: "Sophia Carter",
    image:
      "https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    profession: "Product Manager",
    description:
      "Product manager focused on building user-centric SaaS products and aligning cross-functional teams.",
    tags: ["product", "saas", "team player", "agile"],
  },
  {
    fullName: "Liam Rodriguez",
    image:
      "https://plus.unsplash.com/premium_photo-1661502983829-39a6f522e9e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Engineer",
    description:
      "Full-stack engineer specializing in scalable web applications and clean, maintainable code.",
    tags: ["javascript", "full-stack", "web", "clean code"],
  },
  {
    fullName: "Emma Johnson",
    image:
      "https://plus.unsplash.com/premium_photo-1661720579227-03d3a1da61d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    profession: "UX Designer",
    description:
      "UX designer passionate about crafting intuitive interfaces and delightful digital experiences.",
    tags: ["ux", "ui", "wireframes", "design systems"],
  },

  {
    fullName: "Ava Patel",
    image:
      "https://images.unsplash.com/photo-1591118490115-9f51ee41094c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Data Analyst",
    description:
      "Data analyst who turns complex datasets into actionable insights for business teams.",
    tags: ["data", "sql", "dashboard", "analytics"],
  },
];

let sum = '' 

users.forEach((elem) => {
    sum += ` <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>

        </div>`;
})

let main = document.querySelector('main')

main.innerHTML = sum
