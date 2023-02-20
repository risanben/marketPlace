import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCart-context";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map(item=>
                         <CartItem key={item.id}{...item}/>
                         )}
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}