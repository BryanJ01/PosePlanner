import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Camera, Clock, CreditCard, MapPin, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-dark-blue text-warm-beige">
        <Link className="flex items-center justify-center" href="/">
          <Camera className="h-6 w-6 mr-2" />
          <span className="font-bold">PosePlanner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-terracotta transition-colors" href="#features">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-terracotta transition-colors" href="#packages">
            Paquetes
          </Link>
          <Link className="text-sm font-medium hover:text-terracotta transition-colors" href="#contact">
            Contacto
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm" className="border-warm-beige text-warm-beige hover:bg-warm-beige/10">
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
              Registrarse
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-warm-beige">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-fade-in-up">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in text-dark-blue"
                  style={{ animationDelay: "200ms" }}
                >
                  Agenda tu sesión fotográfica de manera fácil y rápida
                </h1>
                <p
                  className="max-w-[600px] text-warm-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in"
                  style={{ animationDelay: "400ms" }}
                >
                  Selecciona tu paquete, elige la fecha y hora que prefieras, y recibe tus fotos de alta calidad.
                </p>
                <div
                  className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  <Link href="/booking">
                    <Button
                      size="lg"
                      className="bg-terracotta hover:bg-terracotta/90 text-warm-beige transition-transform hover:scale-105"
                    >
                      Agendar Ahora
                    </Button>
                  </Link>
                  <Link href="#packages">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-dark-blue text-dark-blue hover:bg-dark-blue/10 transition-transform hover:scale-105"
                    >
                      Ver Paquetes
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sesión de fotos"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-warm-beige px-3 py-1 text-sm text-dark-blue">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-blue">
                  Todo lo que necesitas
                </h2>
                <p className="max-w-[900px] text-warm-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra plataforma ofrece todas las herramientas para gestionar tus sesiones fotográficas de principio
                  a fin.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <CalendarDays className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Agendamiento Flexible</h3>
                  <p className="text-warm-gray">
                    Selecciona, reprograma o cancela tus sesiones con facilidad. Recibe notificaciones automáticas.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <CreditCard className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Paquetes Personalizados</h3>
                  <p className="text-warm-gray">
                    Elige entre diferentes paquetes según tus necesidades y presupuesto. Paga en línea de forma segura.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <MapPin className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Ubicación y Recordatorios</h3>
                  <p className="text-warm-gray">
                    Recibe recordatorios y la ubicación exacta de tu sesión a través de Google Maps.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <Upload className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Selección de Fotos</h3>
                  <p className="text-warm-gray">
                    Visualiza y selecciona tus fotos favoritas. Descarga en alta calidad.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <Clock className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Proceso Optimizado</h3>
                  <p className="text-warm-gray">
                    Desde la reserva hasta la entrega, todo el proceso está optimizado para ahorrarte tiempo.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 items-start transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl p-4 hover:bg-warm-beige/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20">
                  <Camera className="h-5 w-5 text-terracotta" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-dark-blue">Calidad Profesional</h3>
                  <p className="text-warm-gray">
                    Garantizamos la mejor calidad en cada fotografía, editada por profesionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="w-full py-12 md:py-24 lg:py-32 bg-medium-blue/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-warm-beige px-3 py-1 text-sm text-dark-blue">Paquetes</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-blue">
                  Elige tu paquete ideal
                </h2>
                <p className="max-w-[900px] text-warm-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos diferentes opciones para adaptarnos a tus necesidades y presupuesto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4">
            <div className="flex flex-col rounded-xl border border-warm-gray/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-terracotta/50 hover:translate-y-[-5px]">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-blue">Free</h3>
                  <p className="text-warm-gray">Perfecto para sesiones rapidas para el recuerdo.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold text-terracotta">
                  $0
                  <span className="ml-1 text-base font-medium text-warm-gray">/sesión</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-dark-blue">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    10 minutos de sesión
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    20 fotos instantaneas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Seleccion de 1 de las 20 fotos instantaneas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Impresion Fisica 20x30cm
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/booking?package=free">
                    <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-beige">Seleccionar</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border border-warm-gray/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-terracotta/50 hover:translate-y-[-5px]">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-blue">Básico</h3>
                  <p className="text-warm-gray">Perfecto para sesiones individuales o de pareja.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold text-terracotta">
                  $99
                  <span className="ml-1 text-base font-medium text-warm-gray">/sesión</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-dark-blue">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    1 hora de sesión
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    10 fotos editadas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    1 cambio de vestuario
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Entrega digital
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/booking?package=basic">
                    <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-beige">Seleccionar</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border border-terracotta bg-white p-6 shadow-md ring-2 ring-terracotta transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] animate-pulse-subtle">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-blue">Premium</h3>
                  <p className="text-warm-gray">Ideal para familias o sesiones más elaboradas.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold text-terracotta">
                  $199
                  <span className="ml-1 text-base font-medium text-warm-gray">/sesión</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-dark-blue">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    2 horas de sesión
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    20 fotos editadas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    2 cambios de vestuario
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Entrega digital + 1 impresión 20x30cm
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/booking?package=premium">
                    <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-beige">Seleccionar</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-xl border border-warm-gray/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-terracotta/50 hover:translate-y-[-5px]">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-blue">Profesional</h3>
                  <p className="text-warm-gray">Para eventos especiales o sesiones comerciales.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold text-terracotta">
                  $349
                  <span className="ml-1 text-base font-medium text-warm-gray">/sesión</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-dark-blue">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    4 horas de sesión
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    40 fotos editadas
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Cambios ilimitados de vestuario
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-terracotta"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Entrega digital + álbum impreso
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/booking?package=professional">
                    <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-beige">Seleccionar</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-dark-blue text-warm-beige">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Tienes alguna pregunta?</h2>
              <p className="max-w-[600px] text-medium-blue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link href="mailto:contacto@PosePlanner.com">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
                  Enviar Email
                </Button>
              </Link>
              <Link href="tel:+123456789">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-warm-beige text-warm-beige hover:bg-warm-beige/10"
                >
                  Llamar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6 bg-dark-blue text-warm-beige border-warm-gray/20">
        <p className="text-xs text-medium-blue">© 2023 PosePlanner. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-terracotta transition-colors" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:text-terracotta transition-colors" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

