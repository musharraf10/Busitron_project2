import React from 'react'
import { Box, Button, Stack, Typography, Card, FormControl, FormLabel, Input, Avatar} from "@mui/joy";
import { useState } from "react";

export default function Billing() {


    const [billing, setBilling] = useState({
        address: "123 Main St, City, Country",
        paymentMethod: "Credit Card",
        invoiceHistory: ["2025-01-01", "2024-12-01", "2024-11-01"],
        creditCards: [],
      });

      const [newCard, setNewCard] = useState({
        number: "",
        expiry: "",
        cvv: "",
        cardholder: "",
      });


      const handleAddCard = () => {
        if (newCard.number && newCard.expiry && newCard.cvv && newCard.cardholder) {
          setBilling((prevBilling) => ({
            ...prevBilling,
            creditCards: [...prevBilling.creditCards, newCard],
          }));
          setNewCard({ number: "", expiry: "", cvv: "", cardholder: "" });
        }
      };


  return (
    <>
        <Box sx={{ p: 3 }}>
          <Typography level="h3">Billing Information</Typography>
          <Card sx={{ p: 3 }}>
            <FormControl>
              <FormLabel>Billing Address</FormLabel>
              <Input value={billing.address} onChange={(e) => setBilling({ ...billing, address: e.target.value })} />
            </FormControl>

            <Card sx={{ p: 3, mt: 2, borderRadius: 2 }}>
              <Typography level="h4" sx={{ color: "Black" }}>Enter Credit Card Details</Typography>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel sx={{ color: "black" }}>Cardholder Name</FormLabel>
                  <Input
                    value={newCard.cardholder}
                    onChange={(e) => setNewCard({ ...newCard, cardholder: e.target.value })}
                    placeholder="Enter the your name"
                    sx={{ color: "black" }} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ color: "black" }}>Card Number</FormLabel>
                  <Input
                    value={newCard.number}
                    onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    sx={{ color: "black" }}
                  />
                </FormControl>
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel sx={{ color: "black" }}>Expiry Date</FormLabel>
                    <Input
                      value={newCard.expiry}
                      onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                      placeholder="MM/YY"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel sx={{ color: "black" }}>CVV</FormLabel>
                    <Input
                      value={newCard.cvv}
                      onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                      placeholder="123"
                      sx={{ color: "black" }}
                    />
                  </FormControl>
                </Stack>
                <Button onClick={handleAddCard}>Add Card</Button>
              </Stack>
            </Card>

            <Typography level="h4" sx={{ mt: 2 }}>Saved Cards</Typography>
            {billing.creditCards.map((card, index) => (
              <Card key={index} sx={{ p: 2, mt: 2, borderRadius: 2 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ background: "#fff" }}>💳</Avatar>
                  <Typography sx={{ color: "black" }}>{card.cardholder} - {card.number.replace(/.(?=.{4})/g, "*")}</Typography>
                </Stack>
              </Card>
            ))}

            <Typography level="h4" sx={{ mt: 2 }}>Invoice History</Typography>
            <Stack spacing={1}>
              {billing.invoiceHistory.map((date, index) => (
                <Typography key={index}>Invoice Date: {date}</Typography>))}
            </Stack>
            <Button sx={{ mt: 2 }} onClick={() => console.log("Buying plan...")}>Buy now</Button>
          </Card>
        </Box>
    </>
  )
}
