<?php


namespace zpd\src\models;


use PhpHare\Model;

class TraderForm extends Model
{
    public string $symbol = '';
    public string $email = '';
    public string $body = '';

    public function rules(): array
    {
        return [
            'subject' => [self::RULE_REQUIRED],
            'email' => [self::RULE_REQUIRED],
            'body' => [self::RULE_REQUIRED],
        ];
    }

    public function labels(): array
    {
        return [
            'subject' => 'Enter your subject',
            'email' => 'your email',
            'subject ' => 'body',
        ];

    }

    public function send(){
        return true;
    }
}