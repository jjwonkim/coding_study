# from langchain_community.chat_models import ChatOllama

# llm = ChatOllama(model="llama3:latest")
# llm.invoke("What is stock?")

# export LANGCHAIN_TRACING_V2="true"
# export LANGCHAIN_API_KEY="sk-None-xzbn6U1nBhNYJOLomipYT3BlbkFJXmLyme80WeMRna921VI4"

# from langchain_openai import ChatOpenAI
# llm = ChatOpenAI(api_key='sk-None-xzbn6U1nBhNYJOLomipYT3BlbkFJXmLyme80WeMRna921VI4')
# llm.invoke("how can langsmith help with testing?")


import openai

openai.api_key = "sk-None-xzbn6U1nBhNYJOLomipYT3BlbkFJXmLyme80WeMRna921VI4"

response = openai.chat.completions.create(
    model="gpt-3.5-turbo",d
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)
print(response['choices'][0]['message']['content'])