import Image from "next/image"
import Link from "next/link"
import { Camera, Download, Heart, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export default function PhotosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-dark-blue text-warm-beige px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Camera className="h-6 w-6" />
          <span>PosePlanner</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link
            className="text-sm font-medium text-medium-blue hover:text-terracotta transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium text-medium-blue hover:text-terracotta transition-colors"
            href="/dashboard/sessions"
          >
            Mis Sesiones
          </Link>
          <Link className="text-sm font-medium" href="/dashboard/photos">
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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-blue">Mis Fotos</h1>
          <Button className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
            <Download className="mr-2 h-4 w-4" />
            Descargar Seleccionadas
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="bg-warm-beige/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-terracotta data-[state=active]:text-warm-beige">
              Todas
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-terracotta data-[state=active]:text-warm-beige"
            >
              Favoritas
            </TabsTrigger>
            <TabsTrigger
              value="selected"
              className="data-[state=active]:bg-terracotta data-[state=active]:text-warm-beige"
            >
              Seleccionadas
            </TabsTrigger>
          </TabsList>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-dark-blue">Sesión Profesional - Evento Corporativo</h2>
              <span className="text-sm text-warm-gray">10 de Abril, 2023</span>
            </div>
            <Separator className="my-4 bg-warm-gray/20" />

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 24 }).map((_, i) => (
                  <Card
                    key={i}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03] border-warm-gray/20"
                  >
                    <CardContent className="p-0">
                      <div className="relative group">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Foto ${i + 1}`}
                          alt={`Foto ${i + 1}`}
                          width={300}
                          height={300}
                          className="object-cover aspect-square w-full"
                        />
                        <div className="absolute inset-0 bg-dark-blue/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 scale-90 group-hover:scale-100">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Ver en tamaño completo</DropdownMenuItem>
                              <DropdownMenuItem>Añadir a seleccionadas</DropdownMenuItem>
                              <DropdownMenuItem>Solicitar edición</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card
                    key={i}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03] border-warm-gray/20"
                  >
                    <CardContent className="p-0">
                      <div className="relative group">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Favorita ${i + 1}`}
                          alt={`Favorita ${i + 1}`}
                          width={300}
                          height={300}
                          className="object-cover aspect-square w-full"
                        />
                        <div className="absolute inset-0 bg-dark-blue/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 scale-90 group-hover:scale-100">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Heart className="h-4 w-4 fill-terracotta" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Ver en tamaño completo</DropdownMenuItem>
                              <DropdownMenuItem>Añadir a seleccionadas</DropdownMenuItem>
                              <DropdownMenuItem>Solicitar edición</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="selected" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Card
                    key={i}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03] border-warm-gray/20"
                  >
                    <CardContent className="p-0">
                      <div className="relative group">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Seleccionada ${i + 1}`}
                          alt={`Seleccionada ${i + 1}`}
                          width={300}
                          height={300}
                          className="object-cover aspect-square w-full"
                        />
                        <div className="absolute top-2 right-2 bg-terracotta text-warm-beige text-xs px-2 py-1 rounded-full">
                          Seleccionada
                        </div>
                        <div className="absolute inset-0 bg-dark-blue/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 scale-90 group-hover:scale-100">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 rounded-full transition-transform duration-200 hover:scale-125 hover:bg-terracotta/20 text-warm-beige"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Ver en tamaño completo</DropdownMenuItem>
                              <DropdownMenuItem>Quitar de seleccionadas</DropdownMenuItem>
                              <DropdownMenuItem>Solicitar edición</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

