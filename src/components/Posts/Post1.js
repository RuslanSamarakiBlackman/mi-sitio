import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Post1 = () => {
  const { t } = useTranslation();

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>{t('post.title')}</h2>
          <p>{t('post.intro')}</p>
          <h3>{t('post.restTitle')}</h3>
          <p>{t('post.restDescription')}</p>
          <h4>{t('post.getTitle')}</h4>
          <p>{t('post.getDescription')}</p>
          <pre>
            <code>
              {`// C# Example for GET request
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.example.com/resource");
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Console.WriteLine(content);
    }
}`}
            </code>
          </pre>
          <h4>{t('post.postTitle')}</h4>
          <p>{t('post.postDescription')}</p>
          <pre>
            <code>
              {`// C# Example for POST request
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var content = new StringContent("{\\"key\\":\\"value\\"}", Encoding.UTF8, "application/json");
        var response = await client.PostAsync("https://api.example.com/resource", content);
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}
            </code>
          </pre>
          <h4>{t('post.putTitle')}</h4>
          <p>{t('post.putDescription')}</p>
          <pre>
            <code>
              {`// C# Example for PUT request
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var content = new StringContent("{\\"key\\":\\"newValue\\"}", Encoding.UTF8, "application/json");
        var response = await client.PutAsync("https://api.example.com/resource/1", content);
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}
            </code>
          </pre>
          <h4>{t('post.deleteTitle')}</h4>
          <p>{t('post.deleteDescription')}</p>
          <pre>
            <code>
              {`// C# Example for DELETE request
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var response = await client.DeleteAsync("https://api.example.com/resource/1");
        response.EnsureSuccessStatusCode();
        Console.WriteLine("Resource deleted");
    }
}`}
            </code>
          </pre>
        </Col>
      </Row>
    </Container>
  );
};

export default Post1;
