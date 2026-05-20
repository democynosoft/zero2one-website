export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<
    Record<"fname" | "lname" | "email" | "message" | "service", string>
  >;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};
