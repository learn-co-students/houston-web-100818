class QuestionsController < ApplicationController
    before_action :define_current_question
    
    def create
        question = Question.create(question_params)
        render json: question
    end
    
    def index
        render json: Question.all, methods: [ :options ]
    end
    
    def show
        render json: current_question, methods: [:options]
    end
    
    def update
        current_question.update(question_params)
        render json: current_question
    end
    
    def destroy
        current_question.destroy
        render json: current_question
    end
    
    def question_params
        params.permit()
    end
    
    def define_current_question
        if params[:id]
            @current_question = Question.find(params[:id])
        else
            @current_question = Question.new
        end
    end
    
    def current_question
        @current_question
    end
end
