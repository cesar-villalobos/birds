import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";

describe("expectedData", () => {
  it("checks if returned data from API rendered into component", async () => {
    nock("https://aves.ninjas.cl/api")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
      })
      .get("/birds")
      .reply(200, [
        {
          uid: "76-buteo-albigula",
          name: {
            spanish: "Aguilucho Chico",
            english: "White-throated Hawk",
            latin: "Buteo albigula",
          },
          images: {
            main: "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
            full: "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.jpg",
            thumb:
              "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
          },
          _links: {
            self: "https://aves.ninjas.cl/api/birds/76-buteo-albigula",
            parent: "https://aves.ninjas.cl/api/birds",
          },
          sort: 0,
        },
      ]);

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Buscar Pajaritos")
      ).toBeInTheDocument();

      expect(screen.getByText(/aguilucho/i)).toBeInTheDocument();
    });
  });
});
