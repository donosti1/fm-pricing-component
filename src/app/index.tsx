import React from "react";
import {Button, Container, FormControl, FormLabel, Stack, Switch, Text} from "@chakra-ui/react";

import Routes from "./routes";

const App: React.FC = () => {
  const [selectedMonthly, setSelectedMonthly] = React.useState(true);

  const plans = [
    {
      id: 0,
      title: "basic",
      label: "Basic",
      monthly: "$19.99",
      anually: "$199.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      send: "Send up to 3 GB",
    },
    {
      id: 1,
      title: "professional",
      label: "Professional",
      monthly: "$24.99",
      anually: "$249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      send: "Send up to 10 GB",
    },
    {
      id: 2,
      title: "master",
      label: "Master",
      monthly: "$39.99",
      anually: "$399.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      send: "Send up to 20 GB",
    },
  ];
  const PlanLabel = (props: any) => {
    return (
      <Text color={props.position == "center" ? "white" : "primary.600"} fontSize="sm">
        {props.children}
      </Text>
    );
  };

  const PlanFeature = (props: any) => {
    return (
      <Text
        borderTop={1}
        borderTopColor="primary.500"
        borderTopStyle="solid"
        color={props.position == "center" ? "white" : "primary.600"}
        fontSize="sm"
        paddingY={3}
      >
        {props.children}
      </Text>
    );
  };
  const PlanFeatureLast = (props: any) => {
    return (
      <Text
        borderBottom={1}
        borderBottomColor="primary.500"
        borderBottomStyle="solid"
        borderTop={1}
        borderTopColor="primary.500"
        borderTopStyle="solid"
        color={props.position == "center" ? "white" : "primary.600"}
        fontSize="sm"
        marginBottom={3}
        paddingY={3}
      >
        {props.children}
      </Text>
    );
  };
  const LearnMoreButton = (props: any) => {
    return (
      <Button
        _hover={{
          bgColor: "transparent",
          bgGradient: "linear(to-r,transparent,transparent)",
          color: props.position != "center" ? "#7674c7" : "white",
          borderColor: props.position != "center" ? "#7674c7" : "white",
          borderWidth: 1,
        }}
        bgColor={props.position == "center" ? "white" : "transparent"}
        bgGradient={
          props.position != "center" ? "linear(to-r,hsl(236, 72%, 79%),hsl(237, 63%, 64%))" : ""
        }
        color={props.position != "center" ? "white" : "#7674c7"}
        fontSize="sm"
        paddingY={3}
      >
        LEARN MORE
      </Button>
    );
  };

  function Card(props: any): JSX.Element {
    return (
      <>
        {plans
          .filter((pl: any) => pl.title == props.plan)
          .map((sp) => {
            return (
              <Stack
                key={sp.id}
                backgroundColor="primary.600"
                bgColor={props.position != "center" ? "white" : "transparent"}
                bgGradient={
                  props.position == "center"
                    ? "linear(to-r,hsl(236, 72%, 79%),hsl(237, 63%, 64%))"
                    : ""
                }
                borderLeftRadius={props.position == "right" ? ["xl", 0] : "xl"}
                borderRightRadius={props.position == "left" ? ["xl", 0] : "xl"}
                color={props.position == "center" ? "white" : "primary.700"}
                paddingX={8}
                paddingY={props.position == "center" ? 8 : 4}
                spacing={0}
                width={72}
              >
                <PlanLabel position={props.position}>{sp.label}</PlanLabel>
                <Text fontSize="5xl" paddingY={4}>
                  {selectedMonthly ? sp.monthly : sp.anually}
                </Text>
                <PlanFeature position={props.position}>{sp.storage}</PlanFeature>
                <PlanFeature position={props.position}>{sp.users}</PlanFeature>
                <PlanFeatureLast position={props.position}>{sp.send}</PlanFeatureLast>
                <Stack paddingTop={6}>
                  <LearnMoreButton position={props.position} />
                </Stack>
              </Stack>
            );
          })}
      </>
    );
  }

  return (
    <Stack
      backgroundColor="primary.400"
      backgroundImage={[
        " url('/assets/bg-top.svg')",
        "url('/assets/bg-bottom.svg'), url('/assets/bg-top.svg')",
      ]}
      backgroundPosition={["-200% 0%", "left bottom, right top;"]}
      backgroundRepeat="no-repeat, no-repeat"
      flex={1}
      height={["auto", "100vh"]}
      justifyContent="center"
      paddingY={[20, 18]}
    >
      <Container maxWidth="container.xl">
        <Stack alignItems="center" alignSelf="center" justifyContent="center" textAlign="center">
          <Text color="primary.600" fontSize="4xl">
            Our Pricing
          </Text>

          <Stack alignItems="center" direction="row" justifyContent="center" paddingY={8}>
            <Text color="primary.500" fontSize="sm">
              Annually
            </Text>
            <Switch
              defaultIsChecked
              colorScheme="blue"
              size="lg"
              onChange={() => setSelectedMonthly(!selectedMonthly)}
            />
            <Text color="primary.500" fontSize="sm">
              Monthly
            </Text>
          </Stack>
          <Stack
            alignItems="center"
            alignSelf="center"
            direction={["column", "row"]}
            justifyContent="center"
            spacing={[6, 0]}
          >
            <Card plan="basic" position="left" />
            <Card plan="professional" position="center" />
            <Card plan="master" position="right" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default App;
