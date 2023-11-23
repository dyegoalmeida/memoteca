import { AbstractControl } from "@angular/forms";

export function smallLettersValidator(control: AbstractControl) {
  const authorship = control.value as string;
  if(authorship !== authorship?.toLowerCase()) {
    return { smallLetter: true };
  } else
    return null;
}
