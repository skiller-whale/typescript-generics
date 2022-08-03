// @ts-nocheck

type Contact = {
  name: {
    firstName: string
    lastName: string
  }
  emailAddresses: string[]
  phoneNumbers: number[]
}

// part 1
type Formatter<T> = T

// this function should compile without errors
const formatContact = (contact: Contact, contactFormatter: Formatter<Contact>): string => {
  let output = `Name: ${contactFormatter.formatName(contact.name)}\n`
  output += `Email addresses: ${contactFormatter.formatEmailAddresses(contact.emailAddresses)}\n`
  output += `Phone numbers: ${contactFormatter.formatPhoneNumbers(contact.phoneNumbers)}`
  return output
}

// part 2
type DeepReadonly<T> = T

// *every* assignment in this function body should raise an error
const messUpContact = (contact: DeepReadonly<Contact>): void => {
  contact.name.firstName = "Ada"
  contact.name = { firstName: "Ada", lastName: "Loveplaice" }
  contact.emailAddresses[0] = "ada@seamail.com"
  contact.emailAddresses = ["ada@seamail.com"]
  contact.phoneNumbers[0] = 123456789
  contact.phoneNumbers = [123456789]
}

// part 3
type Writeable<T> = T extends DeepReadonly<infer U> ? U : T

// *no* assignment in this function body should raise an error
const modifyWriteableContact = (contact: Writeable<DeepReadonly<Contact>>): void => {
  contact.name.firstName = "Ada"
  contact.name = { firstName: "Ada", lastName: "Loveplaice" }
  contact.emailAddresses[0] = "ada@seamail.com"
  contact.emailAddresses = ["ada@seamail.com"]
  contact.phoneNumbers[0] = 123456789
  contact.phoneNumbers = [123456789]
}
