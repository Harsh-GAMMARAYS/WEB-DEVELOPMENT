package main

import (
	"fmt"

	"rsc.io/quote"
)

func main() {
	var myVariable int = 10
	fmt.Printf("The value of myVariable is: %v and its type is %T\n", myVariable, myVariable)

	var myOthervariable string = "Hello, World!"
	fmt.Printf("The value of myOtherVariable is: %v and its type is: %T\n", myOthervariable, myOthervariable)

	fmt.Println(quote.Go())
}
