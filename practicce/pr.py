class Questionary:
    def __init__(self):
        self.score = 0
        self.questions = [
            {
                "Q": "What are the principles of OOP? (separate by comma)",
                "answer": ["encapsulation", "inheritance", "polymorphism", "abstraction"]
            },
            {
                "Q": "What non-access modifier is constant?",
                "answer": "final"
            },
            {
                "Q": "What is the capital of France?",
                "answer": "paris"
            },
            {
                "Q": "What are the colors in the rainbow? (separate by comma)",
                "answer": ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
            },
            {
                "Q": "What is the largest planet in our solar system?",
                "answer": "jupiter"
            }
        ]

    def ask_questions(self):
        for q in self.questions:
            user_ans = input(q["Q"] + " ").strip().lower()

            if isinstance(q["answer"], list):

                correct_answers = [a.lower() for a in q["answer"]]
                user_answers = [a.strip().lower() for a in user_ans.split(",")]

                if set(user_answers) == set(correct_answers):
                    self.score += 1
                    print("Correct +1 point")

                elif any(ans in correct_answers for ans in user_answers):
                    print("Incomplete answer")

                else:
                    print("Wrong(")

            else:
                if user_ans == q["answer"].lower():
                    self.score += 1
                    print("Correct +1 point")
                else:
                    print("Wrong(")

        print(f"\nYour final score is {self.score}/{len(self.questions)}")


quiz = Questionary()
quiz.ask_questions()