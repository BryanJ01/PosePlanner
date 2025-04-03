import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, Edit, MapPin, MoreHorizontal, Plus, Trash2, Upload, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-dark-blue text-warm-beige px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Camera className="h-6 w-6" />
          <span>PosePlanner</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link className="text-sm font-medium" href="/dashboard">
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium text-medium-blue hover:text-terracotta transition-colors"
            href="/dashboard/sessions"
          >
            Mis Sesiones
          </Link>
          <Link
            className="text-sm font-medium text-medium-blue hover:text-terracotta transition-colors"
            href="/dashboard/photos"
          >
            Mis Fotos
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-warm-beige/10">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Avatar"
                className="rounded-full"
              />
              <span className="sr-only">Perfil</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 bg-white">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-all duration-300 hover:shadow-md hover:border-terracotta/30 border-warm-gray/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-dark-blue">Sesiones Programadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-terracotta">3</div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-md hover:border-terracotta/30 border-warm-gray/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-dark-blue">Sesiones Completadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-terracotta">12</div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-md hover:border-terracotta/30 border-warm-gray/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-dark-blue">Fotos Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-terracotta">248</div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-md hover:border-terracotta/30 border-warm-gray/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-dark-blue">Fotos Seleccionadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-terracotta">86</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="mt-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-warm-beige/20">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-warm-beige"
              >
                Próximas Sesiones
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-terracotta data-[state=active]:text-warm-beige"
              >
                Sesiones Completadas
              </TabsTrigger>
            </TabsList>
            <Link href="/booking">
              <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
                <Plus className="mr-2 h-4 w-4" />
                Nueva Sesión
              </Button>
            </Link>
          </div>

          <TabsContent value="upcoming" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border-warm-gray/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-dark-blue">Sesión Premium</CardTitle>
                      <CardDescription className="text-warm-gray">Familiar</CardDescription>
                    </div>
                    <Badge className="bg-terracotta text-warm-beige hover:bg-terracotta/90">Confirmada</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">15 de Mayo, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">10:00 AM (2 horas)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">Parque Central</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
                  >
                    Ver Detalles
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-warm-gray hover:text-dark-blue hover:bg-warm-beige/20"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Más opciones</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Reprogramar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border-warm-gray/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-dark-blue">Sesión Básica</CardTitle>
                      <CardDescription className="text-warm-gray">Individual</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-warm-gray text-warm-gray">
                      Pendiente
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">22 de Mayo, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">15:00 PM (1 hora)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">Estudio Fotográfico</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
                  >
                    Ver Detalles
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-warm-gray hover:text-dark-blue hover:bg-warm-beige/20"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Más opciones</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Reprogramar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border-warm-gray/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-dark-blue">Sesión Profesional</CardTitle>
                      <CardDescription className="text-warm-gray">Evento Corporativo</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-medium-blue/20 text-medium-blue">
                      Completada
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">10 de Abril, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Upload className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">40 fotos disponibles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
                  >
                    Ver Fotos
                  </Button>
                  <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
                    Descargar
                  </Button>
                </CardFooter>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border-warm-gray/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-dark-blue">Sesión Premium</CardTitle>
                      <CardDescription className="text-warm-gray">Pareja</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-medium-blue/20 text-medium-blue">
                      Completada
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">28 de Marzo, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Upload className="h-4 w-4 text-warm-gray" />
                      <span className="text-warm-gray">20 fotos disponibles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
                  >
                    Ver Fotos
                  </Button>
                  <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
                    Descargar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-dark-blue">Últimas Fotos</h2>
            <Link href="/dashboard/photos">
              <Button variant="link" className="text-terracotta hover:text-terracotta/80">
                Ver todas
              </Button>
            </Link>
          </div>
          <Separator className="my-4 bg-warm-gray/20" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Foto ${i}`}
                  alt={`Foto ${i}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

