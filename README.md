#  Portafolio Profesional - Luis Miguel Castañeda Arciniegas

Bienvenido a mi portafolio profesional. Este proyecto está construido con **React + Vite**, desplegado automáticamente con un flujo **CI/CD** usando **GitHub Actions** y un **VPS privado**. Aquí encontrarás una muestra de mis habilidades como desarrollador de software y DevOps.

---

##  Tabla de contenido

- [ Tecnologías utilizadas](#-tecnologías-utilizadas)
- [ Características principales](#-características-principales)
- [ Estructura del proyecto](#-estructura-del-proyecto)
- [ CI/CD con GitHub Actions](#️-cicd-con-github-actions)
- [ Enlace en vivo](#-enlace-en-vivo)
- [ Capturas](#️-capturas)
- [ Cómo ejecutar en local](#-cómo-ejecutar-en-local)
- [ Docker (opcional)](#-docker-opcional)
- [ Sobre mí](#-sobre-mí)

---

## 🚀 Tecnologías utilizadas

| 🧩 Frontend         | ⚙️ DevOps / CI/CD     | ☁️ Hosting / Infraestructura |
|--------------------|------------------------|------------------------------|
| ⚛️ React (Vite)     | 🐙 GitHub Actions       | 🖥️ VPS Ubuntu 20.04          |
| 💅 TailwindCSS      | 🐳 Docker + Compose     | 🌐 Nginx Reverse Proxy       |
| 📦 Vite             | 🔁 Git Flow             | 🔐 HTTPS con SSL             |

---

## ✨ Características principales

- ⚡ Interfaz rápida y moderna con **React + Vite**
- 📱 Diseño **responsive** y enfoque **mobile-first**
- 📂 Secciones: **Inicio, Proyectos, Habilidades, Contacto**
- 🚀 Despliegue automático con **GitHub Actions + Docker**
- 🧩 CI/CD directo a **VPS privado con Nginx**
- 🔐 Seguridad con **certificado SSL + configuración segura**

---

## 📁 Estructura del proyecto

portafolio-react/

├── public/

├── src/

│   ├── assets/

│   ├── components/

│   ├── pages/

│   ├── data/

│   └── App.jsx

├── index.html

├── package.json

├── Dockerfile

├── docker-compose.yml

├── nginx.conf

└── .github/workflows/deploy.yml

---

## ⚙️ CI/CD con GitHub Actions

Este proyecto utiliza **GitHub Actions** para ejecutar:

1. 🧪 Tests y build automático en cada `push`
2. 🐳 Construcción de imagen Docker
3. 📤 Despliegue automático vía SSH a VPS
4. 🔄 Reinicio de contenedor y recarga Nginx

###  Ejemplo de Workflow

name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Build app
        run: |
          npm ci
          npm run build

      - name: Deploy via SSH
        uses: appleboy/scp-action@v0.1.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          source: "dist/"
          target: "/var/www/mi-portafolio"

      - name: Reload Nginx
        run: ssh -o StrictHostKeyChecking=no ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }} "sudo systemctl reload nginx"

---

##  Enlace en vivo

🖥️ Puedes visitar mi portafolio aquí:  
👉 **https://lmcadev.com**

---

##  Capturas

>  TO-DO: Añadir capturas o GIFs del sitio en acción.

---

##  Cómo ejecutar en local

git clone https://github.com/lmcadev/portafolio.git
cd portafolio-react
npm install
npm run dev

---

##  Docker (opcional)

docker build -t portafolio .
docker run -p 80:80 portafolio

---

##  Sobre mí

Soy **Luis Miguel Castañeda Arciniegas**, estudiante de Ingeniería de Software enfocado en desarrollo **backend** y prácticas modernas de **DevOps**. Apasionado por crear soluciones limpias, eficientes y escalables.

- 🔗 LinkedIn: https://linkedin.com/in/lmcadev
- 📧 Correo: lmcadev@gmail.com



