import React from 'react'
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";


export default function Plan() {

    const [plan, setPlan] = React.useState({
        name: "Pro Plan",
        price: "$49.99/month",
        renewalDate: "2025-03-01",
      });
      const isExpiringSoon = () => {
        const today = new Date();
        const renewalDate = new Date(plan.renewalDate);
        const diffTime = renewalDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 10;
      };

  return (
    <>
    <Box sx={{ p: 3 }}>
        <Typography level="h3">Current Plan Details</Typography>
        <Card sx={{ p: 3 }}>
          <FormControl>
            <FormLabel>Plan Name</FormLabel>
            <Input value={plan.name} readOnly />
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel>Price</FormLabel>
            <Input value={plan.price} readOnly />
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel>Renewal Date</FormLabel>
            <Input value={plan.renewalDate} readOnly />
          </FormControl>
          {isExpiringSoon() && (
            <Typography sx={{ color: "red", mt: 2 }}>
              Your plan is expiring within 10 days! Renew now.
            </Typography>
          )}
          <Button sx={{ mt: 2 }} onClick={() => console.log("Buying plan...")}>Buy now</Button>
          </Card>
    </Box>
    </>
  )
}
