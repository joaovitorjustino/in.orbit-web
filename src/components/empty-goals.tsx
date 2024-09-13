import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import logo from '../assets/logo-in-orbit.svg'
import letStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letStart} alt="letStart" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhum objetivo, que tal cadastrar um agora
        memso?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
