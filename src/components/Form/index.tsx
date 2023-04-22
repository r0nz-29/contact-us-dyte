import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import StartCallModal from "../StartCallModal";
import ThanksModal from "../ThanksModal";

const validFields = new Set();
validFields.add("1-million-to-5-million");
validFields.add("more-than-1-million");
validFields.add("more-than-5-million");
validFields.add("vp");
validFields.add("director");
validFields.add("ceo");
validFields.add("500-to-1000");
validFields.add("more-than-1000");
validFields.add("north-america");
validFields.add("europe");
validFields.add("anz");

const ContactForm = () => {
  const [form, setForm] = useState(new FormData());
  const [showModal, setShowModal] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    form.set(name, value);
    setForm(form);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const companyRevenue = form.get("companyRevenue");
    const funding = form.get("funding");
    const designation = form.get("designation");
    const employeeSize = form.get("employeeSize");
    const region = form.get("region");

    if ((
        validFields.has(companyRevenue) ||
        validFields.has(funding) ||
        validFields.has(designation))
      && validFields.has(employeeSize)
      && validFields.has(region)) {
      setShowModal(true);
    } else {
      setShowThanks(true);
    }
  };

  return (
    <Box>
      <Container pt={16}>
        <SimpleGrid columns={1} height="100%" alignItems="center">
          <Card
            border="1px solid rgba(0, 0, 0, 0.1)"
            borderTop="8px solid #4299E1"
          >
            <CardBody>
              <Text textAlign="center" fontWeight="bolder" fontSize="4xl">
                Contact us
              </Text>
              <br />
              <form onSubmit={handleSubmit}>
                {/*<VStack spacing={4}>*/}
                <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input type="text" id="name" name="name" onChange={handleInputChange}/>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" id="email" name="email" onChange={handleInputChange}/>
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Input type="tel" id="phone" name="phone" onChange={handleInputChange}/>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <Input type="text" id="company" name="company" onChange={handleInputChange}/>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Company Revenue</FormLabel>
                    <Select name="companyRevenue" onChange={handleInputChange}>
                      <option value="less-than-100k">Less than 100k</option>
                      <option value="100k-to-500k">100k to 500k</option>
                      <option value="500k-to-1-million">500k to 1 million</option>
                      <option value="1-million-to-5-million">1 million to 5 million</option>
                      <option value="more-than-5-million">More than 5 million</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Funding</FormLabel>
                    <Select name="funding" onChange={handleInputChange}>
                      <option value="less-than-100k">Less than 100k</option>
                      <option value="100k-to-500k">100k to 500k</option>
                      <option value="500k-to-1-million">500k to 1 million</option>
                      <option value="more-than-1-million">1 million to 5 million</option>
                      <option value="more-than-5-million">More than 5 million</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Designation</FormLabel>
                    <Select name="designation" onChange={handleInputChange}>
                      <option value="employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="director">Director</option>
                      <option value="vp">VP</option>
                      <option value="ceo">CEO</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Employee Size</FormLabel>
                    <Select name="employeeSize" onChange={handleInputChange}>
                      <option value="">Select employee size</option>
                      <option value="less-than-50">Less than 50</option>
                      <option value="50-to-100">50 to 100</option>
                      <option value="100-to-500">100 to 500</option>
                      <option value="500-to-1000">500 to 1000</option>
                      <option value="more-than-1000">More than 1000</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>
                <VStack mt={6} spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Region</FormLabel>
                    <Select name="region" onChange={handleInputChange}>
                      <option value="">Select region</option>
                      <option value="north-america">North America</option>
                      <option value="europe">Europe</option>
                      <option value="anz">Australia or New Zealand</option>
                      <option value="asia">Asia</option>
                      <option value="south-america">South America</option>
                      <option value="africa">Africa</option>
                      <option value="middle-east">Middle East</option>
                      <option value="central-america">Central America</option>
                      <option value="caribbean">Caribbean</option>
                      <option value="oceania">Oceania</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea id="message" name="message" rows={5} onChange={handleInputChange}/>
                  </FormControl>
                  <Button type="submit" mt={4} width="100%" colorScheme="blue">Submit</Button>
                </VStack>
              </form>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
      <StartCallModal open={showModal} onClose={() => setShowModal(false)} />
      <ThanksModal open={showThanks} onClose={() => setShowThanks(false)} />
    </Box>
  );
};

export default ContactForm;
