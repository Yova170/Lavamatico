import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Entrega de Ropa',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Lavado y Secado',
    icon: LockClosedIcon,
  },
  {
    name: 'Doblado',
    icon: ArrowPathIcon,
  },
  {
    name: 'Entrega de Ropa',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-[#D0F6FF] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-[#21B7E2]">Proceso</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white-900 sm:text-6xl">
          Servicio en 4 pasos
          </p>
        </div>
        <div class="bg-[#D0F6FF] w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
          <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 class="font-bold text-lg mb-2 ">Heading</h2>
            </div>
            <img src="A.png"/>
          </div>
          <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 class="font-bold text-lg mb-2 ">ddddddd</h2>
              <img src="B.png"/>
            </div>
          </div>
          <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 class="font-bold text-lg mb-2 ">ddddddd</h2>
              <img src="C.png"/>
            </div>
          </div>
          <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 class="font-bold text-lg mb-2 ">ddddddd</h2>
              <img src="D.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}