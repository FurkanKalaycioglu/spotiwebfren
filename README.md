# Spotify Friend Activity

Simple Web App to see what your friends are listening on your browser.

## Introduction

A simple web application that allows you to access your friend's activity on Spotify. It utilizes the `sp_dc` token from the web Spotify and sends a request to obtain the web player access token. This access token is then used to request data from the Spotify client API.

Additionally, the application saves your `sp_dc` cookie to your local storage temporarily and does not store any personal information.

## How it Works

1. Obtain the `sp_dc` token from the web Spotify.
2. Send a request to retrieve the web player access token.
3. Use the access token to make requests to the Spotify client API.
4. Fetchs your friend's activity and display it on the client.

## !!

The `sp_dc` token is saved to your browser's local storage when you use the application so you don't have to enter it everytime.
