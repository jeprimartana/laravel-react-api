<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_name' => $this->faker->name(),
            'keterangan'    => $this->faker->name(),
            'salary'        => $this->faker->numberBetween(50000,500000),
            'persediaan'    => $this->faker->numberBetween(500, 5000)
        ];
    }
}