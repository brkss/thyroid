import { Flex, Box, Stack, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useLoginMutation } from "../../generated/graphql";
import { getAccessToken, SetAccessToken } from "../../helpers/constants/token";
import { DEFAULT_REDIR_AUTH } from "../../helpers/constants/defaults";
import { InputAuth } from "../../components";

export const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [loading, SetLoading] = React.useState(false);
  const [error, SetError] = React.useState("");
  const [form, SetForm] = React.useState<any>();
  const [login] = useLoginMutation();

  // handle form data
  const handleForm = (id: string, val: string) => {
    //
    SetForm({
      ...form,
      [id]: val,
    });
  };

  if (getAccessToken() !== "") {
    console.log("Valid refresh token !");
    history.push(DEFAULT_REDIR_AUTH);
  }

  //handle user login
  const handleUserLogin = async () => {
    // validate
    if (!form || !form.identifier || !form.password) {
      SetError("Invalid data!");
      return;
    }
    SetError("");
    const _data = {
      identifier: form.identifier,
      password: form.password,
    };
    SetLoading(true);
    const resp = await login({
      variables: {
        identifier: _data.identifier,
        password: _data.password,
      },
    });
    console.log("login response => ", resp);
    SetLoading(false);
    if (resp.data?.login.status === true) {
      console.log("registered successfuly");
      SetAccessToken(resp.data.login.accessToken!);
      history.push("/");
    } else if (resp.data?.login.status === false) {
      console.log("error status is false");
      SetError(resp.data!.login.message!);
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} w="lg" py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Sign in to your account </Heading>
        </Stack>
        <Box p={8}>
          {error ? <ErrorMessage message={error} /> : null}
          <InputAuth
            placeholder={"Email"}
            changed={(vl) => handleForm("identifier", vl)}
          />
          <InputAuth
            placeholder={"Password"}
            type={"password"}
            changed={(vl) => {
              handleForm("password", vl);
            }}
          />
          <Button
            loadingText="Signing in.."
            isLoading={loading}
            bg={"gray.600"}
            color={"white"}
            _hover={{
              bg: "gray.900",
            }}
            onClick={() => handleUserLogin()}
            size={"sm"}
            mt={"10px"}
            w={"100px"}
          >
            Login
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};
