@extends('layouts.app')
@section('content')
    <div class="flex bg-gray-100 border-b border-gray-300 py-4">
        <div class="container mx-auto">
            <router-link class="mr-4" to="/" exact style="color: black">Home</router-link>
            <router-link class="mr-4" to="/categories" style="color: black">Categories</router-link>
            <router-link class="mr-4" to="/create" style="color: black">Create</router-link>
        </div>
    </div>
    <div class="container mx-auto">
        <router-view></router-view>
    </div>
@endsection
