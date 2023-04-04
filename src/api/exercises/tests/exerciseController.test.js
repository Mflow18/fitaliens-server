const exerciseRepository = require("../exerciseRepository");
const exerciseController = require("../exerciseController");

describe("exerciseController", () => {
  describe("getAllExercices", () => {
    it("should return all exercises", async () => {
      // Création d'un mock du repository pour simuler la fonction getAllExercises
      const getAllExercisesMock = jest
        .spyOn(exerciseRepository, "getAllExercises")
        .mockResolvedValue([
          { title: "Exercise 1", categories: [] },
          { title: "Exercise 2", categories: [] },
          { title: "Exercise 3", categories: [] },
        ]);

      const req = {};
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();

      await exerciseController.getAllExercises(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: [
          { title: "Exercise 1", categories: [] },
          { title: "Exercise 2", categories: [] },
          { title: "Exercise 3", categories: [] },
        ],
      });
    });
  });
});
