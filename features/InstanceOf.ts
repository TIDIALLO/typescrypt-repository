class Customer {
    isCredential(): boolean {
        return false;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(businessPartner: BusinessPartner): string {
    let message = '';


    if (businessPartner instanceof Supplier) {
        message = businessPartner.isInShortList() ? "Sign a new contract the supplier" : "Need to evaluate further";
    }
    if (businessPartner instanceof Customer) {
        message = businessPartner.isCredential() ? "Sign a new contract the customer" : "Credit issue";
    }
    return message;

}
// we  can also use "in" as a type guard. For example:
function signContract2(partner: BusinessPartner): string {
    let msg = '';
    if ("isCredential" in partner) {
        msg = partner.isCredential() ? "Sign a new contract the customer" : "Credit issue";
    }
    else {
        // must be Supplier
        msg = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return msg;
}
//Protections de type définies par l'utilisateur
function isCustomer(businessPartner: any): businessPartner is Customer {
    return businessPartner instanceof Customer;
}


//  test
function main() {
    let businessPartner: BusinessPartner;
    businessPartner = new Supplier();
    businessPartner = new Customer();
    console.log(signContract(businessPartner));

}
const partner = new Customer();
console.log(isCustomer(partner));
main()
//Note les types guard réduisent le type d'une variable dans un bloc conditionnel