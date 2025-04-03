"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Camera, CalendarDays, Clock, MapPin } from "lucide-react"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("package") || "basic"

  const [step, setStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(initialPackage)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const packages = {
    free: {
      name: "Cortesia",
      price: "$0",
      description: "10 minutos de sesión, 10 fotos instantaneas",
    },
    basic: {
      name: "Básico",
      price: "$99",
      description: "1 hora de sesión, 10 fotos editadas",
    },
    premium: {
      name: "Premium",
      price: "$199",
      description: "2 horas de sesión, 20 fotos editadas",
    },
    professional: {
      name: "Profesional",
      price: "$349",
      description: "4 horas de sesión, 40 fotos editadas",
    },
  }

  const availableTimes = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container max-w-8xl mx-auto py-10 px-4 bg-white text-dark-blue">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center mr-4 text-dark-blue hover:text-terracotta transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Link>
        <h1 className="text-2xl font-bold text-dark-blue">Agendar Sesión Fotográfica</h1>
      </div>

      <div className="flex justify-between mb-8">
        <div className={`flex flex-col items-center ${step >= 1 ? "text-terracotta" : "text-warm-gray"}`}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-terracotta text-warm-beige" : "bg-warm-gray/20"}`}
          >
            <Camera className="h-5 w-5" />
          </div>
          <span className="text-sm">Paquete</span>
        </div>
        <div className="relative flex-1 mx-4 mt-5">
          <div className={`absolute top-1/2 w-full h-0.5 ${step >= 2 ? "bg-terracotta" : "bg-warm-gray/20"}`}></div>
        </div>
        <div className={`flex flex-col items-center ${step >= 2 ? "text-terracotta" : "text-warm-gray"}`}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-terracotta text-warm-beige" : "bg-warm-gray/20"}`}
          >
            <CalendarDays className="h-5 w-5" />
          </div>
          <span className="text-sm">Fecha y Hora</span>
        </div>
        <div className="relative flex-1 mx-4 mt-5">
          <div className={`absolute top-1/2 w-full h-0.5 ${step >= 3 ? "bg-terracotta" : "bg-warm-gray/20"}`}></div>
        </div>
        <div className={`flex flex-col items-center ${step >= 3 ? "text-terracotta" : "text-warm-gray"}`}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-terracotta text-warm-beige" : "bg-warm-gray/20"}`}
          >
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-sm">Detalles</span>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-dark-blue">Selecciona tu paquete</h2>
          <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage} className="grid gap-4 md:grid-cols-4">
          <Label
              htmlFor="free"
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${selectedPackage === "free" ? "border-terracotta bg-warm-beige/20 animate-pulse-subtle" : "border-warm-gray/20"}`}
            >
              <RadioGroupItem value="free" id="free" className="sr-only" />
              <div className="font-semibold text-lg text-dark-blue">Cortesia</div>
              <div className="text-2xl font-bold mt-1 text-terracotta">$0</div>
              <div className="text-sm text-warm-gray mt-2">
              10 minutos de sesión
                <br />
                20 fotos instantaneas
                <br />Selecciona 1 de las 20 fotos instantaneas
                <br />
                Impresion Fisica 20x30cm
              </div>
            </Label>
            <Label
              htmlFor="basic"
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${selectedPackage === "basic" ? "border-terracotta bg-warm-beige/20 animate-pulse-subtle" : "border-warm-gray/20"}`}
            >
              <RadioGroupItem value="basic" id="basic" className="sr-only" />
              <div className="font-semibold text-lg text-dark-blue">Básico</div>
              <div className="text-2xl font-bold mt-1 text-terracotta">$99</div>
              <div className="text-sm text-warm-gray mt-2">
                1 hora de sesión
                <br />
                10 fotos editadas
                <br />1 cambio de vestuario
                <br />
                Entrega digital
              </div>
            </Label>
            <Label
              htmlFor="premium"
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${selectedPackage === "premium" ? "border-terracotta bg-warm-beige/20 animate-pulse-subtle" : "border-warm-gray/20"}`}
            >
              <RadioGroupItem value="premium" id="premium" className="sr-only" />
              <div className="font-semibold text-lg text-dark-blue">Premium</div>
              <div className="text-2xl font-bold mt-1 text-terracotta">$199</div>
              <div className="text-sm text-warm-gray mt-2">
                2 horas de sesión
                <br />
                20 fotos editadas
                <br />2 cambios de vestuario
                <br />
                Entrega digital + 1 impresión
              </div>
            </Label>
            <Label
              htmlFor="professional"
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${selectedPackage === "professional" ? "border-terracotta bg-warm-beige/20 animate-pulse-subtle" : "border-warm-gray/20"}`}
            >
              <RadioGroupItem value="professional" id="professional" className="sr-only" />
              <div className="font-semibold text-lg text-dark-blue">Profesional</div>
              <div className="text-2xl font-bold mt-1 text-terracotta">$349</div>
              <div className="text-sm text-warm-gray mt-2">
                4 horas de sesión
                <br />
                40 fotos editadas
                <br />
                Cambios ilimitados
                <br />
                Entrega digital + álbum
              </div>
            </Label>
          </RadioGroup>

          <div className="flex justify-end mt-8">
            <Button onClick={nextStep} className="bg-terracotta hover:bg-terracotta/90 text-warm-beige">
              Continuar
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-dark-blue">Selecciona fecha y hora</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-warm-gray/20">
              <CardHeader className="bg-warm-beige/20 border-b border-warm-gray/10">
                <CardTitle className="text-dark-blue">Fecha</CardTitle>
                <CardDescription className="text-warm-gray">Selecciona el día para tu sesión</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border border-warm-gray/20"
                  disabled={(date) => {
                    // Disable past dates and Sundays
                    return date < new Date() || date.getDay() === 0
                  }}
                />
              </CardContent>
            </Card>

            <Card className="border-warm-gray/20">
              <CardHeader className="bg-warm-beige/20 border-b border-warm-gray/10">
                <CardTitle className="text-dark-blue">Hora</CardTitle>
                <CardDescription className="text-warm-gray">Selecciona la hora para tu sesión</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`justify-start transition-all duration-200 hover:scale-105 ${
                        selectedTime === time
                          ? "bg-terracotta hover:bg-terracotta/90 text-warm-beige"
                          : "border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
            >
              Atrás
            </Button>
            <Button
              onClick={nextStep}
              disabled={!selectedDate || !selectedTime}
              className="bg-terracotta hover:bg-terracotta/90 text-warm-beige"
            >
              Continuar
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-dark-blue">Detalles de contacto y sesión</h2>

          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="text-dark-blue">
                Nombre completo
              </Label>
              <Input
                id="name"
                placeholder="Tu nombre completo"
                className="border-warm-gray/20 focus:border-terracotta/50 focus:ring-terracotta/30"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email" className="text-dark-blue">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="border-warm-gray/20 focus:border-terracotta/50 focus:ring-terracotta/30"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="phone" className="text-dark-blue">
                Teléfono
              </Label>
              <Input
                id="phone"
                placeholder="+123456789"
                className="border-warm-gray/20 focus:border-terracotta/50 focus:ring-terracotta/30"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="location" className="text-dark-blue">
                Ubicación de la sesión
              </Label>
              <Select defaultValue="studio">
                <SelectTrigger className="border-warm-gray/20 focus:ring-terracotta/30">
                  <SelectValue placeholder="Selecciona ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Estudio fotográfico</SelectItem>
                  <SelectItem value="outdoor">Exteriores (parque/playa)</SelectItem>
                  <SelectItem value="client">Domicilio del cliente</SelectItem>
                  <SelectItem value="other">Otra ubicación</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="notes" className="text-dark-blue">
                Notas adicionales
              </Label>
              <Textarea
                id="notes"
                placeholder="Preferencias de estilo, ideas específicas, o cualquier detalle importante que debamos saber"
                rows={4}
                className="border-warm-gray/20 focus:border-terracotta/50 focus:ring-terracotta/30"
              />
            </div>
          </div>

          <Card className="mt-8 border-warm-gray/20">
            <CardHeader className="bg-warm-beige/20 border-b border-warm-gray/10">
              <CardTitle className="text-dark-blue">Resumen de la reserva</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-dark-blue">Paquete:</span>
                  <span className="text-warm-gray">{packages[selectedPackage as keyof typeof packages].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-dark-blue">Precio:</span>
                  <span className="text-terracotta font-semibold">
                    {packages[selectedPackage as keyof typeof packages].price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-dark-blue">Fecha:</span>
                  <span className="text-warm-gray">{selectedDate?.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-dark-blue">Hora:</span>
                  <span className="text-warm-gray">{selectedTime}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-beige animate-pulse-subtle transition-all duration-300 hover:scale-105 hover:shadow-md">
                Confirmar y Pagar
              </Button>
              <p className="text-xs text-center text-warm-gray">
                Al confirmar, aceptas nuestros términos y condiciones.
              </p>
            </CardFooter>
          </Card>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-warm-gray/20 text-dark-blue hover:bg-warm-beige/20 hover:border-terracotta/50"
            >
              Atrás
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

