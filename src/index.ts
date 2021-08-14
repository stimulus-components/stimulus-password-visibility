import { Controller } from 'stimulus'

export default class extends Controller {
  hasHiddenClass: boolean
  hiddenClass: string
  class: string
  hidden: boolean
  inputTarget: HTMLInputElement
  hiddenIconTarget: HTMLElement
  visibleIconTarget: HTMLElement

  static targets = ['input', 'hiddenIcon', 'visibleIcon']
  static classes = ['hidden']

  connect (): void {
    this.hidden = this.inputTarget.type === 'password'
    this.class = this.hasHiddenClass ? this.hiddenClass : 'hidden'
  }

  toggle (e: Event): void {
    e.preventDefault()

    this.inputTarget.type = this.hidden ? 'text' : 'password'
    this.hidden = !this.hidden

    this.hiddenIconTarget.classList.toggle(this.class)
    this.visibleIconTarget.classList.toggle(this.class)
  }
}
