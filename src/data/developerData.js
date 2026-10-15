// Contenido del portafolio. Actualiza aquí proyectos, enlaces y trayectoria.
export const developerData = {
  "personal": {
    "name": "Luis Miguel Castañeda Arciniegas",
    "title": "Ingeniero de software",
    "email": "lmcadev@gmail.com",
    "github": "https://github.com/lmcadev",
    "linkedin": "https://www.linkedin.com/in/lmcadev/"
  },
  "about": "Soy ingeniero de software con enfoque en desarrollo backend y aplicaciones full stack. Trabajo con Java, Spring Boot, Node.js y React para transformar necesidades de negocio en soluciones claras y mantenibles. Me interesan las arquitecturas de software, la automatización y la entrega continua; disfruto aprender, colaborar y llevar las ideas desde el diseño hasta el despliegue.",
  "skills": [
    {
      "category": "Backend & arquitectura",
      "items": [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express",
        "C#",
        ".NET Core",
        "APIs REST",
        "GraphQL"
      ]
    },
    {
      "category": "Frontend & experiencia",
      "items": [
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "Figma"
      ]
    },
    {
      "category": "Datos & persistencia",
      "items": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQL"
      ]
    },
    {
      "category": "DevOps & calidad",
      "items": [
        "Docker",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "VPS",
        "Pruebas unitarias"
      ]
    }
  ],
  "experience": [
    {
      "title": "Líder de proyectos de investigación y desarrollo",
      "company": "Kentron Laser",
      "period": "Septiembre 2017 - Presente",
      "description": "Liderazgo de proyectos de I+D en tecnología láser industrial. Diseño de cadenas de producción, coordinación de equipos multidisciplinarios y desarrollo de software interno y plataformas de comercio electrónico."
    },
    {
      "title": "Gerente General",
      "company": "Industrias MAT",
      "period": "Enero 2016 - Septiembre 2017",
      "description": "Gestión de proyectos a medida, negociación con clientes y coordinación de importaciones y proveedores internacionales. Supervisión de equipos y procesos de calidad."
    },
    {
      "title": "Desarrollador web",
      "company": "Acrílicos Armenia",
      "period": "Enero 2011 - Enero 2016",
      "description": "Desarrollo y mantenimiento de CMS y comercio electrónico. Creación de software de gestión interna, administración de bases de datos y elaboración de reportes."
    }
  ],
  "education": [
    {
      "degree": "Ingeniería de Software",
      "institution": "Universidad Politécnico Grancolombiano",
      "period": "2023 - 2026"
    },
    {
      "degree": "Backend Developer",
      "institution": "Oracle ONE Education",
      "period": "2022 - 2023"
    },
    {
      "degree": "Ingeniería de Sistemas",
      "institution": "Universidad del Quindío",
      "period": "Estudios parciales"
    }
  ],
  "course": [
    {
      "degree": "Diplomado en Ciencias de la Computación",
      "institution": "Formación complementaria",
      "period": "2026"
    },
    {
      "degree": "AI Fundamentals",
      "institution": "IBM",
      "period": "2024"
    },
    {
      "degree": "Bootstrap 5",
      "institution": "Udemy",
      "period": "2023"
    },
    {
      "degree": "Master CSS3 and ReactJS",
      "institution": "Udemy",
      "period": "2023"
    },
    {
      "degree": "Front-End Web Developer",
      "institution": "Udemy",
      "period": "2023"
    },
    {
      "degree": "Git and GitHub",
      "institution": "Alura",
      "period": "2023"
    },
    {
      "degree": "MongoDB Essentials",
      "institution": "Udemy",
      "period": "2023"
    },
    {
      "degree": "UX Design Process",
      "institution": "Google Career Certificates",
      "period": "2022"
    },
    {
      "degree": "Python Programming",
      "institution": "Platzi",
      "period": "2022"
    },
    {
      "degree": "Introduction to Azure Cloud",
      "institution": "Microsoft Learn",
      "period": "2022"
    },
    {
      "degree": "Linux Server Administration",
      "institution": "Platzi",
      "period": "2022"
    },
    {
      "degree": "JavaScript Fundamentals",
      "institution": "Platzi",
      "period": "2022"
    },
    {
      "degree": "Fundamentals in Software Engineering",
      "institution": "Platzi",
      "period": "2022"
    }
  ],
  "portfolio": [
    {
      "title": "Auto3Draw",
      "subtitle": "CAD/CAM web · Diseño y fabricación 3D",
      "description": "Plataforma web de diseño paramétrico para letreros corpóreos y NeonFlex. Conecta el trazado 2D y la vectorización con el modelado 3D en el navegador y la exportación de archivos listos para fabricación.",
      "image": "/files/auto3draw-interface.png",
      "images": [
        "/files/auto3draw-interface.png",
        "/files/auto3draw-ledlib.png"
      ],
      "tags": [
        "Python",
        "FastAPI",
        "TypeScript",
        "React 18",
        "Vite",
        "Three.js",
        "three-bvh-csg",
        "React-Konva",
        "OpenCV",
        "PostgreSQL",
        "Redis",
        "MinIO / S3",
        "Docker",
        "Nginx"
      ],
      "link": "https://auto3draw.app/",
      "category": "CAD & 3D",
      "featured": true,
      "details": [
        {
          "title": "Del diseño a la fabricación",
          "description": "Unifica el dibujo 2D con Konva, el procesamiento de tipografías y la vectorización con OpenCV para generar carcasas, tapas, soportes y canales de cableado."
        },
        {
          "title": "Geometría paramétrica en tiempo real",
          "description": "Motor 3D con Three.js, three-bvh-csg, offsets poligonales y operaciones booleanas aceleradas por BVH. Canvas técnico 2D con React-Konva y gestión de estado con Zustand."
        },
        {
          "title": "Entregables de producción",
          "description": "Exportación STL/DXF, planos de ensamble en PDF y paquetes ZIP. Generación de listas de materiales (BOM) y cálculo de longitudes de LED, cableado y costos aproximados."
        },
        {
          "title": "Arquitectura e infraestructura",
          "description": "Backend Python con FastAPI, Flask o Django, Pydantic y SQLAlchemy o Motor. PostgreSQL, Redis y MinIO/S3 para datos y archivos 3D; Docker Compose, Nginx Gateway y VPS Linux para el despliegue."
        }
      ]
    },
    {
      "title": "ProductApp",
      "description": "Aplicación multiplataforma para microempresas manufactureras. Organiza órdenes de trabajo, asigna tareas y permite dar seguimiento a etapas como diseño, corte láser, ensamblaje y control de calidad.",
      "image": "/files/productApp.jpg",
      "tags": [
        "Flutter",
        "Spring Boot",
        "Express",
        "MySQL",
        "Docker",
        "JWT"
      ],
      "link": "https://github.com/lmcadev-productApp/ProducApp",
      "category": "Full stack",
      "subtitle": "Gestión de producción"
    },
    {
      "title": "MenuGram",
      "description": "Menú digital y gestión de pedidos para restaurantes. Conecta la exploración del menú con las órdenes en tiempo real para facilitar la operación del servicio.",
      "image": "/files/menuGram.png",
      "tags": [
        "ASP.NET Core",
        "Angular",
        "Flutter",
        "MySQL",
        "Docker"
      ],
      "link": "https://github.com/lmcadev/menuGram",
      "category": "Full stack",
      "subtitle": "Tecnología para restaurantes"
    },
    {
      "title": "Cotiz",
      "description": "Propuesta de software para automatizar cotizaciones empresariales e incorporar inteligencia artificial en la generación de diseños únicos.",
      "image": null,
      "tags": [
        "Node.js",
        "Express",
        "MySQL",
        "AI / LLM"
      ],
      "link": "https://github.com/lmcadev/cotiz",
      "category": "IA & automatización",
      "subtitle": "Cotizaciones asistidas por IA"
    },
    {
      "title": "Chiller F18",
      "description": "Código de control para un chiller industrial F18 utilizado con láseres de fibra de 500 W a 2000 W. Un proyecto que conecta software, electrónica y necesidades de la industria.",
      "image": "/files/chiller_F18.png",
      "tags": [
        "C#",
        "Arduino",
        "IoT"
      ],
      "link": "https://github.com/lmcadev/chiller_F18",
      "category": "IoT",
      "subtitle": "Software e industria"
    }
  ]
};
