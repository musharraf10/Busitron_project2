import React from 'react'
import { Box, Button, Stack, Typography, Card, FormControl, FormLabel, Input} from "@mui/joy";
import { useState } from "react";

export default function BecomeCreator() {

    const [creator, setCreator] = useState({
        phone: "",
        channelName: "",
        category: "",
        website: "",
        socialLinks: "",
        monetizationStatus: "",
        collaborations: "",
        govID: "",
      });
    
      const handleCreatorSubmit = () => {
        console.log("Creator Application Submitted:", creator);
      };
    
  return (
    <>
        <Box sx={{ p: 3 }}>
          <Typography level="h3">Become a Creator</Typography>
          <Card sx={{ p: 3, mt: 2, maxWidth: 600 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={creator.phone}
                  onChange={(e) => setCreator({ ...creator, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Channel Name</FormLabel>
                <Input
                  value={creator.channelName}
                  onChange={(e) => setCreator({ ...creator, channelName: e.target.value })}
                  placeholder="Enter your channel name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Category/Niche</FormLabel>
                <Input
                  value={creator.category}
                  onChange={(e) => setCreator({ ...creator, category: e.target.value })}
                  placeholder="E.g., Tech, Gaming, Lifestyle"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Website/Portfolio</FormLabel>
                <Input
                  type="url"
                  value={creator.website}
                  onChange={(e) => setCreator({ ...creator, website: e.target.value })}
                  placeholder="Enter your website or portfolio link"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Social Media Links</FormLabel>
                <Input
                  type="url"
                  value={creator.socialLinks}
                  onChange={(e) => setCreator({ ...creator, socialLinks: e.target.value })}
                  placeholder="Enter your social media links"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Monetization Status</FormLabel>
                <Input
                  value={creator.monetizationStatus}
                  onChange={(e) => setCreator({ ...creator, monetizationStatus: e.target.value })}
                  placeholder="E.g., Monetized, Not Monetized"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Previous Collaborations</FormLabel>
                <Input
                  value={creator.collaborations}
                  onChange={(e) => setCreator({ ...creator, collaborations: e.target.value })}
                  placeholder="Mention any brand collaborations (if any)"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Upload Government ID</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setCreator({ ...creator, govID: e.target.files[0] })}
                />
              </FormControl>
              <Button onClick={handleCreatorSubmit}>Apply</Button>
            </Stack>
          </Card>
        </Box>
    </>
  )
}
